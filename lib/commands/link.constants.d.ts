/**
 * Link Types.
 * @category Constants
 */
export declare const LinkTypes: {
    /** Ethernet Bridge device. */
    readonly Bridge: "bridge";
    /** Bonding device. */
    readonly Bond: "bond";
    /** Dummy network interface. */
    readonly Dummy: "dummy";
    /** High-availability Seamless Redundancy device. */
    readonly Hsr: "hsr";
    /** Intermediate Functional Block device. */
    readonly Ifb: "ifb";
    /** IP over Infiniband device. */
    readonly Ipoib: "ipoib";
    /** Virtual interface base on link layer address (MAC). */
    readonly Macvlan: "macvlan";
    /** Virtual interface based on link layer address (MAC) and TAP. */
    readonly Macvtap: "macvtap";
    /** Virtual Controller Area Network interface. */
    readonly Vcan: "vcan";
    /** Controller Area Network interface. */
    readonly Can: "can";
    /** Virtual Controller Area Network tunnel interface. */
    readonly Vxcan: "vxcan";
    /** Virtual ethernet interface. */
    readonly Veth: "veth";
    /** 802.1q tagged virtual LAN interface. */
    readonly Vlan: "vlan";
    /** Virtual eXtended LAN. */
    readonly Vxlan: "vxlan";
    /** Virtual tunnel interface IPv4|IPv6 over IPv6. */
    readonly Ip6tnl: "ip6tnl";
    /** Virtual tunnel interface IPv4 over IPv4. */
    readonly Ipip: "ipip";
    /** Virtual tunnel interface IPv6 over IPv4. */
    readonly Sit: "sit";
    /** Virtual tunnel interface GRE over IPv4. */
    readonly Gre: "gre";
    /** Virtual L2 tunnel interface GRE over IPv4. */
    readonly Gretap: "gretap";
    /** Encapsulated Remote SPAN over GRE and IPv4. */
    readonly Erspan: "erspan";
    /** Virtual tunnel interface GRE over IPv6. */
    readonly Ip6gre: "ip6gre";
    /** Virtual L2 tunnel interface GRE over IPv6. */
    readonly Ip6gretap: "ip6gretap";
    /** Encapsulated Remote SPAN over GRE and IPv6. */
    readonly Ip6erspan: "ip6erspan";
    /** Virtual tunnel interface. */
    readonly Vti: "vti";
    /** Netlink monitoring device. */
    readonly Nlmon: "nlmon";
    /** Interface for L3 (IPv6/IPv4) based VLANs. */
    readonly Ipvlan: "ipvlan";
    /** Interface for L3 (IPv6/IPv4) based VLANs and TAP. */
    readonly Ipvtap: "ipvtap";
    /** Interface for 6LoWPAN (IPv6) over IEEE 802.15.4 Bluetooth. */
    readonly Lowpan: "lowpan";
    /** GEneric NEtwork Virtualization Encapsulation. */
    readonly Geneve: "geneve";
    /** Bare UDP L3 encapsulation support. */
    readonly Bareudp: "bareudp";
    /** Interface for IEEE 802.1AE MAC Security (MAC‐sec). */
    readonly Macsec: "macsec";
    /** Interface for L3 VRF domains. */
    readonly Vrf: "vrf";
    /** Interface for netdev API tests. */
    readonly Netdevsim: "netdevsim";
    /** Qualcomm rmnet device. */
    readonly Rmnet: "rmnet";
    /** Virtual xfrm interface. */
    readonly Xfrm: "xfrm";
};
/**
 * Link Types.
 * @category Constants
 */
export type LinkTypes = typeof LinkTypes[keyof typeof LinkTypes];
/**
 * Extended Link Types.
 * @category Constants
 */
export declare const ExtendedLinkTypes: {
    /** Bridge slave interface. */
    readonly BridgeSlave: "bridge_slave";
    /** Bond slave interface. */
    readonly BondSlave: "bond_slave";
    /** Ethernet Bridge device. */
    readonly Bridge: "bridge";
    /** Bonding device. */
    readonly Bond: "bond";
    /** Dummy network interface. */
    readonly Dummy: "dummy";
    /** High-availability Seamless Redundancy device. */
    readonly Hsr: "hsr";
    /** Intermediate Functional Block device. */
    readonly Ifb: "ifb";
    /** IP over Infiniband device. */
    readonly Ipoib: "ipoib";
    /** Virtual interface base on link layer address (MAC). */
    readonly Macvlan: "macvlan";
    /** Virtual interface based on link layer address (MAC) and TAP. */
    readonly Macvtap: "macvtap";
    /** Virtual Controller Area Network interface. */
    readonly Vcan: "vcan";
    /** Controller Area Network interface. */
    readonly Can: "can";
    /** Virtual Controller Area Network tunnel interface. */
    readonly Vxcan: "vxcan";
    /** Virtual ethernet interface. */
    readonly Veth: "veth";
    /** 802.1q tagged virtual LAN interface. */
    readonly Vlan: "vlan";
    /** Virtual eXtended LAN. */
    readonly Vxlan: "vxlan";
    /** Virtual tunnel interface IPv4|IPv6 over IPv6. */
    readonly Ip6tnl: "ip6tnl";
    /** Virtual tunnel interface IPv4 over IPv4. */
    readonly Ipip: "ipip";
    /** Virtual tunnel interface IPv6 over IPv4. */
    readonly Sit: "sit";
    /** Virtual tunnel interface GRE over IPv4. */
    readonly Gre: "gre";
    /** Virtual L2 tunnel interface GRE over IPv4. */
    readonly Gretap: "gretap";
    /** Encapsulated Remote SPAN over GRE and IPv4. */
    readonly Erspan: "erspan";
    /** Virtual tunnel interface GRE over IPv6. */
    readonly Ip6gre: "ip6gre";
    /** Virtual L2 tunnel interface GRE over IPv6. */
    readonly Ip6gretap: "ip6gretap";
    /** Encapsulated Remote SPAN over GRE and IPv6. */
    readonly Ip6erspan: "ip6erspan";
    /** Virtual tunnel interface. */
    readonly Vti: "vti";
    /** Netlink monitoring device. */
    readonly Nlmon: "nlmon";
    /** Interface for L3 (IPv6/IPv4) based VLANs. */
    readonly Ipvlan: "ipvlan";
    /** Interface for L3 (IPv6/IPv4) based VLANs and TAP. */
    readonly Ipvtap: "ipvtap";
    /** Interface for 6LoWPAN (IPv6) over IEEE 802.15.4 Bluetooth. */
    readonly Lowpan: "lowpan";
    /** GEneric NEtwork Virtualization Encapsulation. */
    readonly Geneve: "geneve";
    /** Bare UDP L3 encapsulation support. */
    readonly Bareudp: "bareudp";
    /** Interface for IEEE 802.1AE MAC Security (MAC‐sec). */
    readonly Macsec: "macsec";
    /** Interface for L3 VRF domains. */
    readonly Vrf: "vrf";
    /** Interface for netdev API tests. */
    readonly Netdevsim: "netdevsim";
    /** Qualcomm rmnet device. */
    readonly Rmnet: "rmnet";
    /** Virtual xfrm interface. */
    readonly Xfrm: "xfrm";
};
/**
 * Extended Link Types.
 * @category Constants
 */
export type ExtendedLinkTypes = typeof ExtendedLinkTypes[keyof typeof ExtendedLinkTypes];
/**
 * VLAN protocols.
 * @category Constants
 */
export declare enum VlanProtocols {
    '802.1Q' = "802.1Q",
    '802.1ad' = "802.1ad"
}
/**
 * Dont fragment flag values.
 * @category Constants
 */
export declare enum DontFragmentFlagValues {
    /** Causes the bit to be copied from the original IP header. */
    Inherit = "inherit",
    /** Cause the bit to be always unset. */
    Unset = "unset",
    /** Cause the bit to be always set. */
    Set = "set"
}
/**
 * Specifies type of secondary UDP encapsulation.
 * @category Constants
 */
export declare enum SecondaryUdpEncapsulations {
    /** Indicates Foo-Over-UDP. */
    Fou = "fou",
    /** Indicates Generic UDP Encapsulation. */
    Gue = "gue",
    None = "none"
}
/**
 * Specifies mode in which device should run.
 * @category Constants
 */
export declare enum IpipSipDeviceModes {
    /** Indicates IPv6-Over-IPv4 */
    Ip6ip = "ip6ip",
    /** Indicates "IPv4-Over-IPv4". */
    Ipip = "ipip",
    /** Indicates MPLS-Over-IPv4. */
    Mplsip = "mplsip",
    /** Indicates IPv6, IPv4 or MPLS Over IPv4. */
    Any = "any"
}
/**
 * Specifies whether the link should be in datagram mode or connected mode.
 * @category Constants
 */
export declare enum IpoIbModes {
    /**
     * This is the default mode. In datagram mode, packets are sent independently of each other,
     * without a connection between sender and receiver.
     * */
    Datagram = "datagram",
    /**
     * In connected mode, a reliable connection is established before data is exchanged, which can
     * offer higher throughput and lower latency in some situations. However, connected mode uses more
     * resources and may not be supported by all InfiniBand hardware.
     */
    Connected = "connected"
}
/**
 * Specifies the ERSPAN v2 mirrored traffic's direction.
 * @category Constants
 */
export declare enum ErspanDirections {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * TTL special values.
 * @category Constants
 */
export declare enum TtlSpecialValues {
    Auto = "auto",
    Inherit = "inherit"
}
/**
 * Modes for macvlan and macvtap interfaces.
 * @category Constants
 */
export declare enum MacvlanMacvtapModes {
    /**
     * Do not allow communication between macvlan instances on the same physical interface,
     * even if the external switch supports hairpin mode.
     */
    Private = "private",
    /**
     * Virtual Ethernet Port Aggregator mode.
     *
     * Data from one macvlan instance to the other on the same physical inter face is
     * transmitted over the physical interface.
     *
     * Either the attached switch needs to support hairpin mode, or there must be a
     * TCP/IP router forwarding the packets in order to allow communication.
     *
     * This is the default mode.
     */
    Vepa = "vepa",
    /**
     * In bridge mode, all endpoints are directly connected to each other, communication
     * is not redirected through the physical interface's peer.
     */
    Bridge = "bridge",
    /**
     * This mode gives more power to a single endpoint, usually in `macvtap` mode.
     *
     * It is not allowed for more than one endpoint on the same physical interface.
     *
     * All traffic will be forwarded to this endpoint, allowing virtio guests to change
     * MAC address or set promiscuous mode in order to bridge the interface or create
     * vlan interfaces on top of it.
     *
     * By default, this mode forces the underlying interface into promiscuous mode.
     *
     * Passing the `nopromisc` flag prevents this, so the promisc flag may be controlled
     * using standard tools.
     *
     * @see {@link PassthruNopromisc}
     */
    Passthru = "passthru",
    /**  @see {@link Passthru} */
    PassthruNopromisc = "passthru nopromisc",
    /**
     * Allows one to set a list of allowed mac address, which is used to match against
     * source mac address from received frames on underlying interface.
     *
     * This allows creating mac based VLAN associations, instead of standard port or
     * tag based.
     *
     * The feature is useful to deploy 802.1x mac based behavior, where drivers of underlying
     * interfaces doesn't allow that.
     *
     * By default, packets are also considered (duplicated) for destination-based MACVLAN.
     *
     * Passing the `nodst` flag stops matching packets from also going through the destination-based flow.
     *
     * @see {@link SourceNodst}
     */
    Source = "source",
    /** @see {@link Source} */
    SourceNodst = "source nodst"
}
/**
 * Protocol version of the interface.
 * Defaults to {@link HsrVersions.v2010}
 *
 * @category Constants
 */
export declare enum HsrVersions {
    v2010 = 0,
    v2012 = 1
}
/**
 * Protocol of the interface.
 * Defaults to {@link HsrProtocols.HSR}
 *
 * @category Constants
 */
export declare enum HsrProtocols {
    /** High-availability Seamless Redundancy. */
    HSR = 0,
    /** Parallel Redundancy Protocol. */
    PRP = 1
}
/**
 * Multicast router options.
 * @category Constants
 */
export declare enum MultiCastRouterOptions {
    /**
     * The bridge does not act as a multicast router. It will not forward any IP multicast packets
     * between different interfaces.
     *
     * It will forward multicast packets only to ports where multicast listeners are detected.
     */
    Disabled = 0,
    /**
     * The bridge acts as a multicast router and will forward all IP multicast packets.
     * This is the default setting.
     */
    Automatic = 1,
    /**
     *  The bridge uses the multicast router discovery protocol to learn whether it should
     *  forward multicast packets as a multicast router.
     */
    PermanentlyEnabled = 2
}
/**
 * IGMP protocol versions.
 * @category Constants
 */
export declare enum IgmpVersions {
    v2 = 2,
    v3 = 3
}
/**
 * Mld versions.
 * @category Constants
 */
export declare enum MldVersions {
    v1 = 1,
    v2 = 2
}
/**
 * Macsec validation mode options.
 * @category Constants
 */
export declare enum MacsecValidationModeOptions {
    Strict = "strict",
    Check = "check",
    Disabled = "disabled"
}
/**
 * Secure association encodings.
 * @category Constants
 */
export declare enum SecureAssociationEncodings {
    Implicit = 0,
    Explicit = 1
}
/**
 * Is used to configure IPv6 address generation mode for a given interface.
 * @category Constants
 */
export declare enum AddrGenMode {
    /** Use a Modified EUI-64 format interface identifier. */
    Eui64 = "eui64",
    /** Disable automatic address generation. */
    None = "none",
    /**
     * Generate the interface identifier based on a preset
     * `/proc/sys/net/ipv6/conf/{default,DEVICE}/stable_secret`.
     */
    StableSecret = "stable_secret",
    /** Like {@link StableSecret}, but auto-generate a new random secret if none is set. */
    Random = "random"
}
/**
 * Bridge slave port states.
 * @category Constants
 */
export declare enum BridgeSlavePortStates {
    Disabled = 0,
    Listening = 1,
    Learning = 2,
    Forwarding = 3,
    Blocking = 4
}
/**
 * Xdp option types.
 * @category Constants
 */
export declare enum XdpOptionTypes {
    Off = "off",
    Object = "object",
    Pinned = "pinned"
}
