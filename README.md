# reavelearning
skripsi : E-learning (laravel+reactjs)
demo : https://reavelearning.herokuapp.com

PHP 7, NodeJS 16

How to run app:

1. Clone GitHub repo
    git clone https://github.com/hafidd/reavelearning.git path/to/projectName

2. cd to project directory
    cd path/to/projectName

3. Install Composer Dependencies
    composer install

4. Install NPM Dependencies (Optional)
    npm install

5. Create .env file
    cp .env.example .env

6. Generate app key
    php artisan key:generate

7. Generate jwt secret key
    php artisan jwt:secret

8. Create sql database for application

9. Update database settings
    In the .env file fill in the DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD options to match the credentials of the database you just created.

10. Migrate the database
    php artisan migrate

11. Seed the database
    php artisan db:seed

12. Run development server
    php artisan serve
