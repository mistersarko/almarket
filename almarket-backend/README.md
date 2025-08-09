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

# Almarket Backend

Bu Laravel esasynda gurlan backend proýekti.

## Talaplar
- PHP >= 8.0
- Composer
- MySQL ýa-da başga goldanýan DB

## Gurmak
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
---