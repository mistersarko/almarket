# Almarket Backend

This is the backend part of the Almarket project built with Laravel.

## Installation

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan db:seed