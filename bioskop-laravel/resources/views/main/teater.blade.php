@extends('layout.index')
@section('content')
<div class="container-fluid p-5 d-flex justify-content-center">
    <div class="col-12 d-flex justify-content-center p-4 shadow">
        <div>
        <div class="d-flex">
            <div class="bg-primary p-2 col-1 me-3"></div> <small>Kursi Belum Di Pesan</small>
        </div>
        <div class="d-flex mt-1">
            <div class="bg-danger p-2 col-1 me-3"></div> <small>Kursi Sudah Di Pesan</small>
        </div>
    <h4 class="text-center text-dark mb-4"><i class="bi bi-arrow-up"></i> Layar <i class="bi bi-arrow-up"></i></h4>


    <form action="/checkout">
        <input type="hidden" name="id" value={{ $id->id }}/>
@for($i = 0; $i < $jumlah_kursi; $i++)
<label>
        <div class="box text-light text-center mx-2 my-2  {{ $i % 10 + 1 === 6 ? "ms-5" :"" }}" value="{{ $id_kursi[floor($i / 10)] }}-{{ $i % 10 + 1 }}" style="width:50px;">
                <p>{{ $id_kursi[floor($i / 10)] }}-{{ $i % 10 + 1 }}</p>
                <input type="checkbox" name="nomor_kursi[]"
 @foreach($id->pemesanan_tiket as $tiket)
                @if($tiket->nomor_kursi == strval($id_kursi[floor($i / 10)])."-".strval($i % 10 + 1) )
                    checked disabled
                @endif
        @endforeach value="{{ $id_kursi[floor($i / 10)] }}-{{ $i % 10 + 1 }}" id="check" class="btn-check" >
            </div>
        </label>{!! $i % 10 + 1 === 10 ? "<br></br>" : "" !!}
@endfor
    <br><button type="submit" class="btn btn-primary kirim disabled">Pesan</button>
</form>
</div>
</div>
</div>
<script>
    const checkbox = document.querySelectorAll('#check')
    const btn = document.querySelector(".kirim")
    checkbox.forEach(element => {
        if (element.checked) {
            element.parentNode.classList.add('bg-danger');
        }else{
            element.parentNode.classList.add('bg-primary');
        }

        element.addEventListener('click',(e) => {

    if (e.target.parentNode.classList.contains("bg-primary")) {
            e.target.parentNode.classList.replace('bg-primary', 'bg-success')
    }else if (e.target.parentNode.classList.contains("bg-success")) {
            e.target.parentNode.classList.replace('bg-success', 'bg-primary')
    } else{
    return false
    }

    const ada = Array.from(checkbox).some(e => e.parentNode.classList.contains('bg-success'))
    if (ada) {
        btn.classList.remove('disabled')
    }else{
    btn.classList.add('disabled')
    }
})
});

</script>
@endsection
