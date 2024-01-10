@extends('layout.index')
@section('content')
<div class="container-fluid p-5 text-dark">
        <div class="px-5 d-flex">
            <div>
                <img src="https://i.pinimg.com/474x/8d/e6/2c/8de62c26aa3e2f6975c0163aef5e26e6.jpg" class="card-img-top rounded shadow" style="width:18rem;">
            </div>
            <div class="info ms-4">
                <h1>{{ $film->judul }}</h1>
                <small>{{ $film->tanggal_rilis }} | {{ $film->durasi }}</small> <br>
                <div class="film-info my-3">
                    <table>
                        <tr>
                            <td><strong>Tema</strong></td>
                            <td>: {{ $film->tema }} </td>
                        </tr>
                        <tr>
                            <td><strong>Sutradara</strong></td>
                            <td>: {{ $film->sutradara }}</td>
                        </tr>
                        <tr>
                            <td><strong>Aktor</strong></td>
                            <td>: {{ $film->aktor }}</td>
                        </tr>
                        <tr>
                            <td colspan="2"><strong>Sinopsis</strong> : <br> {{ $film->deskripsi }}</td>

                        </tr>
                        <tr>
                        </tr>
                    </table>


            <div class="mt-4 d-flex">
                @if(count($film->jadwal_films) < 1)

                <div class="col-md-3 card p-3 ms-4 shadow text-center">
                    <strong>Belum Ada Jadwal</strong>
                </div>
                @else
 @foreach ($film->jadwal_films as $jadwal)
                <div class="col-md-4 card p-3 ms-4 shadow">
            <p>Tanggal : {{ $jadwal->tanggal_tayang }} </p>
            <p>Jam : {{ $jadwal->jam_tayang }} WIB</p>
            <a href="/teater/{{ $jadwal->id }}" class="btn btn-primary">
                Pesan Tiket
            </a>
        </div>
            @endforeach
                @endif

    </div>


                </div>

            </div>
        </div>

</div>
@endsection
