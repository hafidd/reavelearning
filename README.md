Proyek untuk skripsi : E-learning (laravel+postgresql+reactjs) 
2019
Demo : https://reavelearning.herokuapp.com

requirement : PHP 7, NodeJS 16, PostgreSQL

Cara menjalankan aplikasi:

1. Clone GitHub repo
    ```sh
    git clone https://github.com/hafidd/reavelearning.git path/to/projectName
    ```

2. cd to project directory
    ```sh
    cd path/to/projectName
    ```

3. Install Composer Dependencies
    ```sh
    composer install
    ```
    
4. Install NPM Dependencies (Optional)
    ```sh
    npm install
    ```

5. Create .env file
    ```sh
    cp .env.example .env
    ```
    
6. Generate app key
    ```sh
    php artisan key:generate
    ```

7. Generate jwt secret key
    ```sh
    php artisan jwt:secret
    ```

8. Create new sql database for application

9. Update database settings
    In the .env file fill in the DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD options to match the credentials of the database you just created.
    example :
    ```sh
    ...
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=db_skripsi
    DB_USERNAME=postgres
    DB_PASSWORD=password
    ...
    ```

10. Migrate the database
    ```sh
    php artisan migrate
    ```
    
11. Seed the database
    ```sh    
    php artisan db:seed
    ```
    
12. Run development server
    ```sh
    php artisan serve
    ```