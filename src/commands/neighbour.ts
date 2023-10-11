import CommandWithReturnedData from '../common/classes/command-with-returned-data';
import Command from '../common/classes/command';
import { SchemaIds } from '../common/constants/schemas';
import { GlobalOptions } from '../common/interfaces/common';
import { NeighbourAddOptions } from './neighbour/add.interfaces';
import { NeighbourAddSchema } from './neighbour/add.schema';
import { NeighbourDelOptions } from './neighbour/del.interfaces';
import { NeighbourDelSchema } from './neighbour/del.schema';
import { NeighbourShowSchema } from './neighbour/show.schema';
import { NeighbourInfo, NeighbourShowOptions } from './neighbour/show.interfaces';

/**
 * Add a new neighbour entry.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function add(options: NeighbourAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<NeighbourAddOptions>> {

  const cmd = ['ip', 'neighbour', 'add'];

  const ipCmd = new Command<NeighbourAddOptions>(
    SchemaIds.NeighbourAdd,
    NeighbourAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Delete a neighbour entry.
 *
 * @remarks
 * Warning: Attempts to delete or manually change a {@link NudStates.Noarp} entry created by the kernel
 * may result in unpredictable behaviour.
 *
 * Particularly, the kernel may try to resolve this address even on a NOARP interface
 * or if the address is multicast or broadcast.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function del(options: NeighbourDelOptions,
                          globalOptions: GlobalOptions = {}): Promise<Command<NeighbourDelOptions>> {

  const cmd = ['ip', 'neighbour', 'del'];

  const ipCmd = new Command<NeighbourDelOptions>(
    SchemaIds.NeighbourDel,
    NeighbourDelSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Change an existing entry.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function change(options: NeighbourAddOptions,
                             globalOptions: GlobalOptions = {}): Promise<Command<NeighbourAddOptions>> {

  const cmd = ['ip', 'neighbour', 'change'];

  const ipCmd = new Command<NeighbourAddOptions>(
    SchemaIds.NeighbourAdd,
    NeighbourAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Add a new entry or change an existing one.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function replace(options: NeighbourAddOptions,
                              globalOptions: GlobalOptions = {}): Promise<Command<NeighbourAddOptions>> {

  const cmd = ['ip', 'neighbour', 'replace'];

  const ipCmd = new Command<NeighbourAddOptions>(
    SchemaIds.NeighbourAdd,
    NeighbourAddSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * Flush neighbour entries.
 *
 * @remarks
 * The differences are that it does not run when no arguments are given, and that the
 * default neighbour states to be flushed do not include {@link NudStates.Permanent} and {@link NudStates.Noarp}.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function flush(options: NeighbourShowOptions,
                            globalOptions: GlobalOptions = {}): Promise<Command<NeighbourShowOptions>> {

  const cmd = ['ip', 'neighbour', 'flush'];

  const ipCmd = new Command<NeighbourShowOptions>(
    SchemaIds.NeighbourShow,
    NeighbourShowSchema,
    options,
    globalOptions,
    cmd);

  return await ipCmd.exec();
}

/**
 * List neighbour entries.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function show(options: NeighbourShowOptions = {},
                           globalOptions: GlobalOptions  = {}): Promise<Command<NeighbourShowOptions> | NeighbourInfo[]> {

  const cmd = ['ip', 'neighbour', 'show'];

  const ipCmd = new CommandWithReturnedData<NeighbourShowOptions>(
    SchemaIds.NeighbourShow,
    NeighbourShowSchema,
    options,
    {
      ...globalOptions,
      // Overrides for a better show.
      '-details'   : true,
      '-statistics': true,
      '-json'      : true
    },
    cmd);

  return await ipCmd.exec<NeighbourInfo[]>();
}

export default {
  add,
  del,
  change,
  replace,
  flush,
  show
};