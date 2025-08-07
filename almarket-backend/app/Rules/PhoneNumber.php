<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class PhoneNumber implements Rule
{
    public function passes($attribute, $value)
    {
        return preg_match('/^\+9936[0-9]{7}$/', $value);
    }

    public function message()
    {
        return 'Telefon belgisi dogry formatda bolmaly: +9936XXXXXXXX';
    }
}