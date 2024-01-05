using MySql.Data.MySqlClient;

public class FilmManager
{
    private readonly string connectionString;

    private readonly MySqlConnection _connection;

    public FilmManager(IConfiguration configuration){
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    public List<Film> GetAllFilms()
    {
        List<Film> films = new List<Film>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM films";
                MySqlCommand command = new MySqlCommand(query,connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Film film = new Film
                        {
                            id = Convert.ToInt32(reader["id"]),
                            judul= reader["judul"].ToString(),
                            sutradara = reader["sutradara"].ToString(),
                            aktor = reader["aktor"].ToString(),
                            deskripsi = reader["deskripsi"].ToString(),
                            durasi = reader["durasi"].ToString(),
                            created_at = reader["created_at"].ToString(),
                            tanggal_rilis = Convert.ToDateTime(reader["tanggal_rilis"]),
                        };

                        films.Add(film);
                    }
                }
            }
        }
        catch (Exception ex)
        {
          Console.WriteLine(ex);
        }
        return films;
    }

}