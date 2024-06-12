/**
 * Link set xdp object options.
 * @category Interfaces
 */
export interface LinkSetXdpObjectOptions {
    /**
     * Attaches a XDP/BPF program to the given device.
     *
     * The FILE points to a BPF ELF file (f.e. generated by LLVM) that contains the BPF program code, map specifications,
     * etc. If a XDP/BPF program is already attached to the given device, an error will be thrown.
     *
     * If no XDP/BPF program is currently attached, the device supports XDP and the program from the BPF ELF file passes
     * the kernel verifier, then it will be attached to the device.
     *
     * If the option -force is passed to `ip` then any prior attached XDP/BPF program will be atomically overridden
     * and no error will be thrown in this case.
     *
     * If no section option is passed, then the default section name ("prog") will be assumed, otherwise the provided
     * section name will be used.
     *
     * If no verbose option is passed, then a verifier log will only be dumped on load error.
     * See also EXAMPLES section for usage examples.
     */
    file: string;
    /**
     * Specifies a section name that contains the BPF program code.
     * If no section name is specified, the default one ("prog") will be used.
     * This option is to be passed with the object option.
     */
    section?: string;
    /**
     * Act in verbose mode. For example, even in case of success, this will print the verifier log in case a program was
     * loaded from a BPF ELF file.
     */
    verbose?: true;
}
