"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLinkVxlanArgsSchema = void 0;
const link_constants_1 = require("../../link.constants");
exports.AddLinkVxlanArgsSchema = {
    type: 'object',
    required: ['id'],
    additionalProperties: false,
    properties: {
        id: {
            type: 'integer',
            minimum: 1,
            maximum: 16777215
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        group: {
            type: 'string',
            format: 'ip',
            nullable: true
        },
        remote: {
            type: 'string',
            format: 'ip',
            nullable: true
        },
        local: {
            type: 'string',
            format: 'ip-or-any',
            nullable: true
        },
        ttl: {
            type: 'integer',
            minimum: 0,
            maximum: 255,
            nullable: true
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        df: {
            type: 'string',
            enum: Object.values(link_constants_1.DontFragmentFlagValues),
            nullable: true
        },
        flowlabel: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 1048575
        },
        dstport: {
            type: 'integer',
            nullable: true,
            minimum: 1,
            maximum: 65535
        },
        srcport: {
            type: 'array',
            nullable: true,
            items: [
                {
                    type: 'integer',
                    minimum: 1,
                    maximum: 65535
                },
                {
                    type: 'integer',
                    minimum: 1,
                    maximum: 65535
                }
            ],
            minItems: 2,
            maxItems: 2
        },
        learning: {
            type: 'boolean',
            nullable: true
        },
        nolearning: {
            type: 'boolean',
            nullable: true
        },
        proxy: {
            type: 'boolean',
            nullable: true
        },
        noproxy: {
            type: 'boolean',
            nullable: true
        },
        rsc: {
            type: 'boolean',
            nullable: true
        },
        norsc: {
            type: 'boolean',
            nullable: true
        },
        l2miss: {
            type: 'boolean',
            nullable: true
        },
        nol2miss: {
            type: 'boolean',
            nullable: true
        },
        l3miss: {
            type: 'boolean',
            nullable: true
        },
        nol3miss: {
            type: 'boolean',
            nullable: true
        },
        udpcsum: {
            type: 'boolean',
            nullable: true
        },
        noudpcsum: {
            type: 'boolean',
            nullable: true
        },
        udp6zerocsumtx: {
            type: 'boolean',
            nullable: true
        },
        noudp6zerocsumtx: {
            type: 'boolean',
            nullable: true
        },
        udp6zerocsumrx: {
            type: 'boolean',
            nullable: true
        },
        noudp6zerocsumrx: {
            type: 'boolean',
            nullable: true
        },
        ageing: {
            type: 'integer',
            nullable: true,
            minimum: 0
        },
        maxaddress: {
            type: 'integer',
            nullable: true,
            minimum: 0
        },
        external: {
            type: 'boolean',
            nullable: true
        },
        noexternal: {
            type: 'boolean',
            nullable: true
        },
        gbp: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        gpe: {
            type: 'boolean',
            enum: [true],
            nullable: true
        }
    }
};
//# sourceMappingURL=vxlan.schema.js.map