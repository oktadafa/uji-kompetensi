using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class RuangsController : ControllerBase
{
    private readonly RuangsManager _ruangManager;
    Response response = new Response();

    public RuangsController(IConfiguration configuration){
        _ruangManager = new RuangsManager(configuration);
    }

    [HttpGet]

    public IActionResult GetAllFilm()
    {
        try
        {
            response.status = 200;
            response.data = _ruangManager.GetAllRuangs();
            response.message = "Berhasil Mendapatkan Data";
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }

        return Ok(response);
    }


    [HttpPost("tambah")]

    public IActionResult tambahRuangs([FromBody]Ruangs ruangs)
    {
        try
        {
            response.status = 200;
            response.data = _ruangManager.tambahRuang(ruangs);
            response.message ="Berhasil Menambahkan Data";
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message =ex.Message;
        }
        return Ok(response);
    }



    [HttpPut("ubah/{id}")]

    public IActionResult ubahRuang([FromBody] Ruangs ruangs, int id)
    {
        try
        {
            response.status = 200;
            response.data = _ruangManager.ubahRuang(ruangs,id);
            response.message ="Berhasil Mengubah Data";
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message =ex.Message;
        }
        return Ok(response);
    }

    [HttpDelete("hapus/{id}")]
    public IActionResult hapusRuang(int id){

        try
        {
            response.status = 200;
            response.data = _ruangManager.hapusRuang(id);
            response.message ="Berhasil Menghapus Data";
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message =ex.Message;
        }
        return Ok(response);
    }
}