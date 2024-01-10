@extends('layout.index')
@section('content')
<div class="container-fluid p-5 ">
    <h1 class="text-center mb-3">Daftar Film</h1>
    <hr>
    <div class="d-flex">
    <div class="row p-4 d-flex">
        @foreach ($films as $item)
        <div class="col mt-4 text-center">
            <div style="width: 15rem;">
                <img src="https://i.pinimg.com/474x/8d/e6/2c/8de62c26aa3e2f6975c0163aef5e26e6.jpg" class="card-img-top rounded" alt="...">
                <a class="fs-5 text-decoration-none text-dark" href="/film/{{ $item->id }}">{{ $item->judul }}</a>
            </div>
        </div>
        @endforeach
    </div>
    </div>
</div>
@endsection
