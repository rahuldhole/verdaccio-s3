// TODO: update to generate ./verdaccio/config.yaml
import { ConfigBuilder } from 'verdaccio';

const config = ConfigBuilder.build();
config
  .addUplink('upstream', { url: 'https://registry.upstream.local' })
  .addUplink('upstream2', { url: 'https://registry.upstream2.local' })
  .addPackageAccess('upstream/*', {
    access: 'public',
    publish: 'foo, bar',
    unpublish: 'foo, bar',
    proxy: 'some',
  })
  .addLogger({ level: 'info', type: 'stdout', format: 'json' })
  .addStorage('/tmp/verdaccio')
  .addSecurity({ api: { legacy: true } });

// generate JSON object as output
config.getConfig();

// generate output as yaml
config.getAsYaml();

console.log(config.getAsYaml());