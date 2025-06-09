@echo off
REM Wait for 5 seconds
timeout /t 5 /nobreak

REM Start Django backend in a new command window
start "Django Server" cmd /k "cd backend && ..\env\Scripts\activate && python manage.py runserver"

REM Start React frontend (Vite) in a new command window
start "Vite Frontend" cmd /k "cd frontend && npm run dev"

REM Open frontend in default browser
start http://localhost:5173