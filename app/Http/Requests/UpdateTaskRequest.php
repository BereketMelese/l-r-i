<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTaskRequest extends FormRequest
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
            "name" => ["required", "string", "max:255"],
            "image" =>  ["image", "nullable"],
            "description" => ['string', 'nullable'],
            "due_date" => ["nullable", "date"],
            "project_id"=> ["required","exists:projects,id"],
            "assigned_user_id"=> ["required","exists:users,id"],
            "status" => ["required", Rule::in(["pending", "completed", "in_progress"])],
            "priority" => ["required", Rule::in(["low", "medium", "high"])]
        ];
    }
}