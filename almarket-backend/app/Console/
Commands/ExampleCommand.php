```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ExampleCommand extends Command
{
    protected $signature = 'example:run';
    protected $description = 'Run an example command';

    public function handle()
    {
        $this->info('Example command executed successfully.');
    }
}