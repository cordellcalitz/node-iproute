import {RouteAddOptions} from '../../lib/commands/route/add.interfaces';
import {TestFixture} from '../../src/common/interfaces/tests';

export const Tests: TestFixture<RouteAddOptions>[] = [
  {
    description: 'with `to` `via` and `dev`',
    options: {
      to_: 'default',
      via: {
        address_: '192.168.1.1'
      },
      dev: 'eth0'
    },
    expectedCmd: [
      '',
      'ip',
      'route',
      'replace',
      'default',
      'via',
      '192.168.1.1',
      'dev',
      'eth0'
    ],
    expectedCmdToExec: ` ip route replace default via 192.168.1.1 dev eth0`
  },
];

export default Tests;