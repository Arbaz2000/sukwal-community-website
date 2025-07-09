# PowerShell script to set up environment variables for development

Write-Host "Setting up environment variables..." -ForegroundColor Green

# Set environment variables
$env:DATABASE_URL = "file:./dev.db"
$env:NEXTAUTH_URL = "http://localhost:3000"
$env:NEXTAUTH_SECRET = "your-secret-key-here-change-this-in-production"

Write-Host "Environment variables set successfully!" -ForegroundColor Green
Write-Host "DATABASE_URL: $env:DATABASE_URL" -ForegroundColor Yellow
Write-Host "NEXTAUTH_URL: $env:NEXTAUTH_URL" -ForegroundColor Yellow
Write-Host "NEXTAUTH_SECRET: $env:NEXTAUTH_SECRET" -ForegroundColor Yellow

Write-Host "`nYou can now run:" -ForegroundColor Cyan
Write-Host "  npx prisma generate" -ForegroundColor White
Write-Host "  npx prisma db push" -ForegroundColor White
Write-Host "  node scripts/setup-admin.js" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White 