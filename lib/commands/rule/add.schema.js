"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleAddSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const rule_constants_1 = require("../rule.constants");
exports.RuleAddSchema = {
    $id: schemas_1.SchemaIds.RuleAdd,
    type: 'object',
    required: [],
    properties: {
        type: {
            type: 'string',
            enum: Object.values(rule_constants_1.RuleTypes),
            nullable: true
        },
        not: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        from: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        to: {
            type: 'string',
            format: 'ip-with-optional-mask',
            nullable: true
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        fwmark: {
            type: 'string',
            nullable: true,
            pattern: '^(0x[0-9a-fA-F]+|[0-9]+)(/(0x[0-9a-fA-F]+|[0-9]+))?$'
        },
        iif: {
            type: 'string',
            minLength: 1,
            maxLength: 15,
            nullable: true
        },
        oif: {
            type: 'string',
            minLength: 1,
            maxLength: 15,
            nullable: true
        },
        l3mdev: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        uidrange: {
            type: 'string',
            minLength: 1,
            pattern: '^[0-9]+-[0-9]+$',
            nullable: true
        },
        ipproto: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    minLength: 1,
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        sport: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    pattern: '^[0-9]+-[0-9]+$',
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        dport: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    pattern: '^[0-9]+-[0-9]+$',
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        preference: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        tun_id: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        table: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(rule_constants_1.RoutingTables),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        protocol: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    minLength: 1,
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        nat: {
            type: 'string',
            format: 'ip',
            nullable: true
        },
        realms: {
            type: 'string',
            pattern: '^[0-9]+(/[0-9]+)?$',
            nullable: true
        },
        goto: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        suppress_prefixlength: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        suppress_ifgroup: {
            type: 'integer',
            minimum: 0,
            nullable: true
        }
    }
};
//# sourceMappingURL=add.schema.js.map