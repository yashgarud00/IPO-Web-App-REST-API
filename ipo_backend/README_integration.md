# Integration Guide for Django Backend and React Frontend

## 1. Connect React Frontend to Django Backend API

- Update API base URL in React frontend (ipo-frontend/src/utils/ipoData.js or wherever API calls are made) to point to Django backend API, e.g.:
  ```js
  const API_BASE_URL = 'http://localhost:8000/api';
  ```

- Handle JWT authentication in React:
  - Obtain JWT tokens by POSTing to `/api/token/` with username and password.
  - Store access token securely (e.g., in memory or localStorage).
  - Include access token in Authorization header for API requests:
    ```
    Authorization: Bearer <access_token>
    ```

## 2. Configure CORS in Django Backend

- Install django-cors-headers:
  ```
  pip install django-cors-headers
  ```

- Add to `INSTALLED_APPS` in `ipo_backend/settings.py`:
  ```python
  'corsheaders',
  ```

- Add middleware in `ipo_backend/settings.py`:
  ```python
  MIDDLEWARE = [
      'corsheaders.middleware.CorsMiddleware',
      # ... other middleware ...
  ]
  ```

- Configure allowed origins in `ipo_backend/settings.py`:
  ```python
  CORS_ALLOWED_ORIGINS = [
      "http://localhost:3000",
  ]
  ```

## 3. Development Setup: Run Frontend and Backend Separately

- Run Django backend:
  ```
  python manage.py runserver
  ```

- Run React frontend:
  ```
  cd ipo-frontend
  npm install
  npm start
  ```

- Use proxy in React `package.json` to forward API requests to backend:
  ```json
  "proxy": "http://localhost:8000"
  ```

## 4. Production Setup: Serve React Build from Django

- Build React frontend:
  ```
  cd ipo-frontend
  npm run build
  ```

- Copy build files to Django static directory or configure Django to serve React build directory.

- Use WhiteNoise or similar middleware to serve static files.

- Update Django URLs to serve React index.html for frontend routes.

## 5. Deployment

- Deploy backend and frontend on same or separate servers.

- Use environment variables to configure API URLs and secrets.

- Use HTTPS and secure JWT tokens.

---

Let me know if you want me to help with any specific step or provide code snippets for React JWT handling or Django CORS setup.
