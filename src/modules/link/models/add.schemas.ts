import { JSONSchemaType } from 'ajv';

import { VirtualLinkTypes }                 from './add.constants';
import { SchemaIds }                        from '../../../common/constants/schemas';
import { LinkAddOptions }                   from './add.interfaces';
import { LinkErspanIp6ErspanOptionsSchema } from './virtual-link-types/erspan-ip6erspan.schema';
import { LinkGreGretapOptionsSchema }       from './virtual-link-types/gre-gretap.schema';
import { LinkIp6GreIp6GretapOptionsSchema } from './virtual-link-types/ip6gre-ip6gretap.schema';
import { LinkIpipSipOptionsSchema }         from './virtual-link-types/ipip-sit.schema';
import { LinkIpoIbOptionsSchema }           from './virtual-link-types/ipoib.schema';
import { LinkVethVxcanOptionsSchema }       from './virtual-link-types/veth-vxcan.schema';
import { LinkVlanOptionsSchema }            from './virtual-link-types/vlan.schema';
import { LinkVxlanOptionsSchema }           from './virtual-link-types/vxlan.schema';

export const LinkAddSchema: JSONSchemaType<LinkAddOptions> = {
  $id       : SchemaIds.LinkAdd,
  type      : 'object',
  required  : ['name', 'type', 'type_args'],
  properties: {
    link        : {
      type     : 'string',
      minLength: 1,
      maxLength: 15,
      nullable : true
    },
    name        : {
      type     : 'string',
      minLength: 1,
      maxLength: 15
    },
    txqueuelen  : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    address     : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    broadcast   : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    mtu         : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    index       : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    numtxqueues : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    numrxqueues : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    gso_max_size: {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    gso_max_segs: {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    type        : {
      type: 'string',
      enum: Object.values(VirtualLinkTypes) as VirtualLinkTypes[]
    },
    // TODO: How to condition ayOf depending of `type`?
    type_args: {
      anyOf: [
        LinkVlanOptionsSchema,
        LinkVxlanOptionsSchema,
        LinkVethVxcanOptionsSchema,
        LinkIpipSipOptionsSchema,
        LinkGreGretapOptionsSchema,
        LinkIp6GreIp6GretapOptionsSchema,
        LinkIpoIbOptionsSchema,
        LinkErspanIp6ErspanOptionsSchema
      ]
    }
  }
};