import { SecondaryUdpEncapsulations } from '../../link.constants';
/**
 * Add link gre & gretap type arguments.
 * @category Interfaces
 */
export interface AddLinkGreGretapTypeArgs {
    /** Specifies the remote address of the tunnel. */
    remote: string;
    /**
     * Specifies the fixed local address for tunneled packets.
     * It must be an address on another interface on this host.
     */
    local: string;
    /**
     * Serialize packets.
     *
     * The {@link seq} flag enables sequencing of both incoming and outgoing packets.
     * The {@link oseq} flag enables sequencing of outgoing packets.
     * The {@link iseq} flag requires that all input packets are serialized.
     */
    seq?: boolean;
    /** @see {@link seq} */
    iseq?: boolean;
    /** @see {@link seq} */
    noiseq?: boolean;
    /** @see {@link seq} */
    oseq?: boolean;
    /** @see {@link seq} */
    nooseq?: boolean;
    /**
     * Use keyed GRE with key KEY.
     *
     * KEY is either a number or an IPv4 address-like dotted quad.
     * The {@link key} parameter specifies the same key to use in both directions.
     * The {@link ikey} and {@link okey} parameters specify different keys for input and output.
     */
    key?: number | string;
    /** @see {@link key} */
    nokey?: true;
    /** @see {@link key} */
    ikey?: number | string;
    /** @see {@link key} */
    noikey?: true;
    /** @see {@link key} */
    okey?: number | string;
    /** @see {@link key} */
    nookey?: true;
    /**
     * Generate/require checksums for tunneled packets.
     *
     * The {@link ocsum} flag calculates checksums for outgoing packets.
     * The {@link icsum} flag requires that all input packets have the correct checksum.
     * The {@link csum} flag is equivalent to the combination {@link icsum} {@link ocsum} .
     */
    csum?: boolean;
    /** @see {@link csum} */
    icsum?: boolean;
    /** @see {@link csum} */
    noicsum?: boolean;
    /** @see {@link csum} */
    ocsum?: boolean;
    /** @see {@link csum} */
    noocsum?: boolean;
    /** Specifies the TTL value to use in outgoing packets. */
    ttl?: number;
    /** Specifies the TOS value to use in outgoing packets. */
    tos?: number;
    /**
     * Enables/disables Path MTU Discovery on this tunnel. It is enabled by default.
     * Note that a fixed {@link ttl} is incompatible with this option:
     * tunneling with a fixed {@link ttl} always makes pmtu discovery.
     */
    pmtudisc?: boolean;
    /** @see {@link pmtudisc} */
    nopmtudisc?: boolean;
    /**
     * Enables/disables IPv4 DF suppression on this tunnel.
     * Normally datagrams that exceed the MTU will be fragmented; the presence of the DF flag
     * inhibits this, resulting instead in an ICMP Unreachable (Fragmentation Required) message.
     * Enabling this attribute causes the DF flag to be ignored.
     */
    'ignore-df'?: boolean;
    /** @see {@link['ignore-df']} */
    'noignore-df'?: boolean;
    /** Specifies the physical device to use for tunnel endpoint communication. */
    dev?: string;
    /** @see SecondaryUdpEncapsulations */
    encap?: SecondaryUdpEncapsulations;
    /** @see {@link AddLinkIpipSitTypeArgs['encap-sport'] } */
    'encap-sport'?: number | 'auto';
    /** TODO: No doc in man. */
    'encap-dport'?: number;
    /** Specifies if UDP checksums are enabled in the secondary encapsulation. */
    'encap-csum'?: boolean;
    /** @see {@link['encap-csum']} */
    'noencap-csum'?: boolean;
    /**
     * Specifies if Remote Checksum Offload is enabled.
     * This is only applicable for Generic UDP Encapsulation.
     */
    'encap-remcsum'?: boolean;
    /** @see {@link['encap-remcsum']} */
    'noencap-remcsum'?: boolean;
    /** Make this tunnel externally controlled (e.g. `ip route encap`). */
    external?: true;
}
