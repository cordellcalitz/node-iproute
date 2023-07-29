import { JSONSchemaType } from 'ajv';

import { SchemaIds }                      from '../../../../common/constants/schemas';
import { LinkIp6GreIp6gretapTypeOptions } from './ip6gre-ip6gretap.interfaces';

export const LinkIp6GreIp6GretapOptionsSchema: JSONSchemaType<LinkIp6GreIp6gretapTypeOptions> = {
  $id                 : SchemaIds.LinkAddIp6GreIp6gretapOptions,
  type                : 'object',
  required            : ['remote', 'local'],
  additionalProperties: false,
  properties          : {
    remote               : {
      type  : 'string',
      format: 'ip'
    },
    local                : {
      type  : 'string',
      format: 'ip'
    },
    seq                  : {
      type    : 'boolean',
      nullable: true
    },
    iseq                 : {
      type    : 'boolean',
      nullable: true
    },
    noiseq               : {
      type    : 'boolean',
      nullable: true
    },
    oseq                 : {
      type    : 'boolean',
      nullable: true
    },
    nooseq               : {
      type    : 'boolean',
      nullable: true
    },
    key                  : {
      type    : 'number',
      minimum : 0,
      maximum : 4294967295,
      nullable: true
    },
    nokey                : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    ikey                 : {
      type    : 'number',
      minimum : 0,
      maximum : 4294967295,
      nullable: true
    },
    noikey               : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    okey                 : {
      type    : 'number',
      minimum : 0,
      maximum : 4294967295,
      nullable: true
    },
    nookey               : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    csum                 : {
      type    : 'boolean',
      nullable: true
    },
    icsum                : {
      type    : 'boolean',
      nullable: true
    },
    noicsum              : {
      type    : 'boolean',
      nullable: true
    },
    ocsum                : {
      type    : 'boolean',
      nullable: true
    },
    noocsum              : {
      type    : 'boolean',
      nullable: true
    },
    hoplimit             : {
      type    : 'number',
      minimum : 1,
      maximum : 255,
      nullable: true
    },
    encaplimit           : {
      type    : 'number',
      minimum : 0,
      maximum : 255,
      nullable: true
    },
    tclass               : {
      type     : 'string',
      minLength: 2,
      nullable : true
    },
    flowlabel            : {
      type    : 'number',
      minimum : 0,
      maximum : 1048575,
      nullable: true
    },
    'allow-localremote'  : {
      type    : 'boolean',
      nullable: true
    },
    'noallow-localremote': {
      type    : 'boolean',
      nullable: true
    },
    dev                  : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    external             : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};