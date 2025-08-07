<?php

namespace Tests\Feature\User;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    use RefreshDatabase;

    public function test_authenticated_user_can_get_profile()
    {
        $user = User::factory()->create();
        $token = auth()->login($user);

        $response = $this->withHeader('Authorization', "Bearer $token")
                         ->getJson('/api/user');

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'email' => $user->email,
                 ]);
    }

    public function test_unauthenticated_user_cannot_access_profile()
    {
        $response = $this->getJson('/api/user');

        $response->assertStatus(401);
    }
}