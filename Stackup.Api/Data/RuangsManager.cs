using MySql.Data.MySqlClient;

public class RuangsManager
{
    private readonly string connectionString;

    private readonly MySqlConnection _connection;

    public RuangsManager(IConfiguration configuration){
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    public List<Ruangs> GetAllRuangs()
    {
        List<Ruangs> ruangs = new List<Ruangs>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM ruangs";
                MySqlCommand command = new MySqlCommand(query,connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Ruangs ruangs1 = new Ruangs
                        {
                            id = Convert.ToInt32(reader["id"]),
                            nama_ruang = reader["nama_ruang"].ToString(),
                            jumlah_kursi = Convert.ToInt32(reader["jumlah_kursi"])
                        };

                        ruangs.Add(ruangs1);
                    }
                }
            }
        }
        catch (Exception ex)
        {
          Console.WriteLine(ex);
        }
        return ruangs;
    } 

    public int tambahRuang(Ruangs ruangs)
    {
    using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "INSERT INTO ruangs (nama_ruang, jumlah_kursi) values (@nama_ruang, @jumlah_kursi)";
               using(MySqlCommand command = new MySqlCommand(query,connection)){
                    command.Parameters.AddWithValue("@nama_ruang", ruangs.nama_ruang);
                    command.Parameters.AddWithValue("@jumlah_kursi", ruangs.jumlah_kursi);

                    connection.Open();
                    return command.ExecuteNonQuery();
               }
            }    
    }

    public int ubahRuang(Ruangs ruangs, int id)
    {
    using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "UPDATE ruangs SET nama_ruang = @nama_ruang, jumlah_kursi = @jumlah_kursi WHERE id = @id";
               using(MySqlCommand command = new MySqlCommand(query,connection)){
                    command.Parameters.AddWithValue("@nama_ruang", ruangs.nama_ruang);
                    command.Parameters.AddWithValue("@jumlah_kursi", ruangs.jumlah_kursi);
                    command.Parameters.AddWithValue("@id", id);
                    connection.Open();
                    return command.ExecuteNonQuery();
               }
            }    
    }

    public int hapusRuang( int id)
    {
    using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "DELETE FROM ruangs WHERE id = @id";
               using(MySqlCommand command = new MySqlCommand(query,connection)){
                    command.Parameters.AddWithValue("@id", id);
                    connection.Open();
                    return command.ExecuteNonQuery();
               }
            }    
    }

}