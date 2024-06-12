"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const child_process_1 = require("child_process");
const schemas_1 = require("../constants/schemas");
const command_1 = require("../errors/command");
const command_2 = __importDefault(require("./command"));
const misc_1 = require("../misc");
const promisifiedExec = (0, util_1.promisify)(child_process_1.exec);
class CommandWithStdin extends command_2.default {
    constructor(schemaId, schema, options, globalOptions, ipCmd) {
        super(schemaId, schema, options, globalOptions, ipCmd);
        this.schemaId = schemaId;
        this.schema = schema;
        this.options = options;
        this.globalOptions = globalOptions;
        this.ipCmd = ipCmd;
        (0, misc_1.validate)(schemas_1.SchemaIds.StdinGlobalOption, schemas_1.StdinGlobalOptionSchema, globalOptions);
        this.buildCmd();
    }
    buildCmd() {
        super.buildCmd();
        this._cmd = this.cmd.concat('- <<EOF\n', ...[`${this.globalOptions.stdin}`], '\nEOF');
        this._cmdToExec = this.cmd.join(' ');
    }
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.globalOptions.dryRun) {
                return this;
            }
            const { stderr } = yield promisifiedExec(this._cmdToExec);
            if (!stderr) {
                return this;
            }
            const message = stderr.replace(/\n/g, '');
            throw new command_1.CommandError(message, this._cmdToExec);
        });
    }
}
exports.default = CommandWithStdin;
//# sourceMappingURL=command-with-stdin.js.map