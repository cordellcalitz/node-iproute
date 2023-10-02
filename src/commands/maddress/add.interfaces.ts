/**
 * Maddress add options.
 * @category Interfaces
 */
export interface MaddressAddOptions {
  /** The link-layer multicast address. */
  address_: string;
  /** The device to join/leave this multicast address. */
  dev: string;
}