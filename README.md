# SweetShop Project 🍭

A full-stack web application for managing a sweet shop business with a modern React frontend (Next.js) and Django REST API backend.

## Project Structure

```
SweetShopProject/
├── frontend/                # Next.js React application
│   ├── src/
│   │   ├── app/            # Next.js 13+ App Router pages
│   │   ├── components/     # Reusable React components
│   │   ├── styles/         # CSS/SCSS files
│   │   ├── lib/            # Utility functions (API client, helpers)
│   │   └── hooks/          # Custom React hooks
│   ├── public/             # Static files (images, etc.)
│   ├── package.json        # Next.js dependencies and scripts
│   ├── next.config.js      # Next.js configuration
│   └── .env                # Environment variables for frontend
│
└── backend/                 # Django REST API
    ├── SweetShopBackend/    # Django project folder
    │   ├── settings.py
    │   ├── urls.py
    │   ├── wsgi.py
    │   └── asgi.py
    ├── sweets/              # Django app for sweets logic
    │   ├── models.py        # Sweet model
    │   ├── views.py         # CRUD APIs for sweets
    │   ├── serializers.py   # DRF Serializers
    │   └── urls.py          # sweets API endpoints
    ├── inventory/           # Django app for inventory
    │   └── ...              # Similar app structure
    ├── users/               # Django app for authentication
    │   └── ...
    ├── manage.py            # Django CLI entrypoint
    ├── requirements.txt     # Python dependencies
    ├── .env                 # Backend environment variables
    ├── static/              # Django static files
    └── media/               # Uploaded media files
```

## Features

- **Frontend (Next.js)**
  - Modern React application with App Router
  - Responsive design with Tailwind CSS
  - API integration with Django backend
  - Component-based architecture

- **Backend (Django REST API)**
  - RESTful API with Django REST Framework
  - Three main apps: Sweets, Inventory, and Users
  - SQLite database (easily configurable for PostgreSQL)
  - CORS enabled for frontend integration

- **Sweet Management**
  - CRUD operations for sweets
  - Image upload support
  - Category management
  - Availability status

- **Inventory Management**
  - Stock level tracking
  - Low stock alerts
  - Automatic restock notifications

- **User Management**
  - User profiles and authentication
  - Customer and staff role separation
  - Account management

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

6. Start the development server:
   ```bash
   python manage.py runserver
   ```

7. The API will be available at `http://localhost:8000/api/`

## API Endpoints

### Sweets
- `GET /api/sweets/` - List all sweets
- `POST /api/sweets/` - Create a new sweet
- `GET /api/sweets/{id}/` - Get sweet details
- `PUT /api/sweets/{id}/` - Update sweet
- `DELETE /api/sweets/{id}/` - Delete sweet
- `GET /api/sweets/available/` - List available sweets
- `POST /api/sweets/{id}/toggle_availability/` - Toggle sweet availability

### Inventory
- `GET /api/inventory/` - List all inventory items
- `POST /api/inventory/` - Create inventory item
- `GET /api/inventory/{id}/` - Get inventory details
- `PUT /api/inventory/{id}/` - Update inventory
- `DELETE /api/inventory/{id}/` - Delete inventory
- `GET /api/inventory/low_stock/` - List low stock items
- `POST /api/inventory/{id}/update_quantity/` - Update quantity

### Users
- `GET /api/users/profiles/` - List all user profiles
- `POST /api/users/profiles/` - Create user profile
- `GET /api/users/profiles/{id}/` - Get profile details
- `PUT /api/users/profiles/{id}/` - Update profile
- `DELETE /api/users/profiles/{id}/` - Delete profile
- `GET /api/users/profiles/customers/` - List customers
- `GET /api/users/profiles/staff/` - List staff members

## Environment Variables

### Frontend (.env)
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_BASE_URL` - Frontend base URL

### Backend (.env)
- `SECRET_KEY` - Django secret key
- `DEBUG` - Debug mode (True/False)
- `ALLOWED_HOSTS` - Comma-separated list of allowed hosts
- `DATABASE_URL` - Database connection string

## Development

### Frontend Development
- Use `npm run dev` for development server
- Use `npm run build` to build for production
- Use `npm run lint` to run ESLint

### Backend Development
- Use `python manage.py runserver` for development server
- Use `python manage.py test` to run tests
- Use `python manage.py makemigrations` to create migrations

## Deployment

### Frontend Deployment
The frontend can be deployed to Vercel, Netlify, or any static hosting service:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `out` or `.next` directory to your hosting service

### Backend Deployment
The backend can be deployed to Heroku, DigitalOcean, AWS, or any Python hosting service:

1. Set up your production database (PostgreSQL recommended)
2. Configure environment variables
3. Run migrations: `python manage.py migrate`
4. Collect static files: `python manage.py collectstatic`
5. Start the server with a WSGI server like Gunicorn

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on the project repository.