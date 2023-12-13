<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'=>User::factory(),
            'category_id'=>Category::factory(),
            'slug'=> $this->faker->slug(),
            // 'thumbnail'=>$this->faker->image(),
            'title'=> $this->faker->sentence,
            'excerpt' => implode(' ', $this->faker->paragraphs(1)),
            'body'=> implode(' ',$this->faker->paragraphs(6)),
        ];
    }
}
