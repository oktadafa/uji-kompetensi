<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Role::create([
                'role_name'=> 'admin'
        ]);
        Role::create([
                'role_name' => 'kasir'
        ]);
        Role::create([
                'role_name' => 'pelanggan'
        ]);

        User::create([
                'name' => 'okta',
                'username' => 'okta',
                'password' => bcrypt('okta'),
                'role_id' => 1,
                'email' => 'okta@gmail.com'
        ]);

        User::create([
                'name' => 'daffa',
                'username' => 'daffa',
                'password' => bcrypt('daffa'),
                'role_id' => 2,
                'email' => 'daffa@gmail.com'
        ]);
        User::create([
                'name' => 'ramadani',
                'username' => 'ramadani',
                'password' => bcrypt('ramadani'),
                'role_id' => 3,
                'email' => 'ramadani@gmail.com'
        ]);
    }
}
