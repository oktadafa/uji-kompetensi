using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class FilmController : ControllerBase
{
    private readonly FilmManager _filmManager;
    Response response = new Response();

    public FilmController(IConfiguration configuration){
        _filmManager = new FilmManager(configuration);
    }

    [HttpGet]

    public IActionResult GetAllFilm()
    {
        try
        {
            response.status = 200;
            response.data = _filmManager.GetAllFilms();
            response.message = "Success";
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }

        return Ok(response);
    }

    
}