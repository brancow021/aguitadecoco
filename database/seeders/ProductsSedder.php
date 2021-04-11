<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'title' => 'Arroz de coco',
                'description' => 'Delicioso arroz de coco, con un toque especial',  
                'price' => 34000,
                'id_discount' => 2,
                'cover' => 'https://www.sweetysalado.com/wp-content/uploads/2014/09/DSC_0070NN.jpg',
            ],
            [
                'title' => 'Dulce de coco',
                'description' => 'Delicioso dulce de coco, con un toque especial',
                'price' => 31000,
                'id_discount' => 2,
                'cover' => 'https://d1uz88p17r663j.cloudfront.net/original/104075cf81da7ce417c11daab9948224_dulce-coco-post-3.png',
            ],
            [
                'title' => 'Aceite de coco',
                'description' => 'Espectacular aceite de coco, perfecto para darle brillo a tu cabello',
                'price' => 12000,
                'id_discount' => 2,
                'cover' => 'https://www.mercadomacao.com/wp-content/uploads/2020/04/aceite-coco-adecoco.jpg',
            ]
        ]);
    }
}
