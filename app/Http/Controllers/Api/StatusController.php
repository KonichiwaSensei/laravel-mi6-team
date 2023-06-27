<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    

    public function index(){

        $status = Status::orderBy('id')->get();

        return $status;
    }
}
