<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Тестовый пользователь',
            'email' => 'testManager@gmail.com',
            'role' => 'Менеджер',
            'password' => Hash::make('testManager')
        ]);
    }
}

