import { TtlSpecialValues } from '../../link/add.constants';

export interface AddRouteMplsEncapArgs {
  /** Mpls label stack with labels separated by /. */
  mpls?: true | string;
  /** TTL to use for MPLS header or 0 to inherit from IP header. */
  ttl?: number | TtlSpecialValues;
}