"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteShowSchema = void 0;
const schemas_1 = require("../../common/constants/schemas");
const address_constants_1 = require("../address.constants");
const show_constants_1 = require("./show.constants");
exports.RouteShowSchema = {
    $id: schemas_1.SchemaIds.RouteShow,
    type: 'object',
    required: [],
    properties: {
        to: {
            type: 'string',
            format: 'ip-with-required-mask-and-all-and-default-values',
            nullable: true
        },
        root: {
            type: 'string',
            format: 'ip-with-required-mask-and-all-and-default-values',
            nullable: true
        },
        match: {
            type: 'string',
            format: 'ip-with-required-mask-and-all-and-default-values',
            nullable: true
        },
        exact: {
            type: 'string',
            format: 'ip-with-required-mask-and-all-and-default-values',
            nullable: true
        },
        tos: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        dsfield: {
            type: 'integer',
            nullable: true,
            minimum: 0,
            maximum: 255
        },
        table: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RouteRoutingTables),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        vrf: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        cloned: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        cached: {
            type: 'boolean',
            enum: [true],
            nullable: true
        },
        from: {
            type: 'string',
            format: 'ip-with-required-mask-and-all-and-default-values',
            nullable: true
        },
        protocol: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RoutingTableProtocols),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        proto: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(show_constants_1.RoutingTableProtocols),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        type: {
            type: 'string',
            enum: Object.values(show_constants_1.RouteTypes),
            nullable: true
        },
        scope: {
            type: ['string', 'integer'],
            nullable: true,
            oneOf: [
                {
                    type: 'string',
                    enum: Object.values(address_constants_1.AddressScopes),
                    nullable: true
                },
                {
                    type: 'integer',
                    minimum: 0,
                    nullable: true
                }
            ]
        },
        dev: {
            type: 'string',
            minLength: 1,
            nullable: true
        },
        via: {
            type: 'string',
            format: 'ip-with-optional-family-prefix',
            minLength: 1,
            nullable: true
        },
        src: {
            type: 'string',
            format: 'ip',
            nullable: true
        },
        realm: {
            type: 'integer',
            minimum: 0,
            nullable: true
        },
        realms: {
            type: 'string',
            pattern: '^[0-9]+(/[0-9]+)?$',
            nullable: true
        }
    }
};
//# sourceMappingURL=show.schema.js.map