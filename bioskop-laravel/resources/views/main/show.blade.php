@extends('layout.index')
@section('content')
<div class="container-fluid p-5 text-light" style="background-color: #006d77">
        <div class="px-5 d-flex">
            <img src="https://i.pinimg.com/474x/8d/e6/2c/8de62c26aa3e2f6975c0163aef5e26e6.jpg" class="card-img-top rounded" style="width:18rem;">
            <div class="info ms-4">
                <h1>{{ $film->judul }}</h1>
                <small>{{ $film->tanggal_rilis }} | {{ $film->durasi }}</small> <br>
                <div class="film-info my-3">
                    <strong>Genre</strong> : Comedy <br>
                    <strong>Sutradara</strong> : {{ $film->sutradara }} <br>
                    <strong>Aktor</strong> : {{ $film->aktor }} <br>
                </div>
                <p class="mt-3">{{ $film->deskripsi }}</p>
            </div>
        </div>
</div>
@endsection
