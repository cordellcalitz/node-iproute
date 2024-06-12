import { JSONSchemaType } from 'ajv';
import { SchemaIds } from '../constants/schemas';
import { GlobalOptionsWithRequiredFilePath } from '../interfaces/common';
import CommandWithRedirectFromFilepath from './command-with-redirect-from-filepath';
export default class CommandWithRedirectFromFilepathAndReturnedData<T_CommandOptions extends {
    [index: string]: any;
}> extends CommandWithRedirectFromFilepath<T_CommandOptions> {
    protected schemaId: SchemaIds;
    protected schema: JSONSchemaType<T_CommandOptions>;
    protected options: T_CommandOptions;
    protected globalOptions: GlobalOptionsWithRequiredFilePath;
    protected ipCmd: string[];
    constructor(schemaId: SchemaIds, schema: JSONSchemaType<T_CommandOptions>, options: T_CommandOptions, globalOptions: GlobalOptionsWithRequiredFilePath, ipCmd: string[]);
    exec<T_ReturnData>(): Promise<this | T_ReturnData>;
}
