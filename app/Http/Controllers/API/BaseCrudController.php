<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

class BaseCrudController extends Controller
{
    protected $model;

    public function index()
    {
        return $this->model->paginate();
    }
}
