<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RgisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => 'required|string',
            'email' => 'email|required|unique:users,email',
            'username' => 'required|unique:users,username|min:6',
            'password' => 'required|min:8'
        ];
    }
}
