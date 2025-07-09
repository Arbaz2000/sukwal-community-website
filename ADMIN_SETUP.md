# Admin Panel Setup

This guide will help you set up the admin panel for the Sukhwal Community Website.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 3. Initialize Database

**Option 1: Using PowerShell (Recommended for Windows)**

```powershell
# Set environment variables and run setup
.\scripts\setup-env.ps1
npx prisma generate
npx prisma db push
node scripts/setup-admin.js
```

**Option 2: Manual setup**

```bash
# Set environment variables (Windows PowerShell)
$env:DATABASE_URL="file:./dev.db"
$env:NEXTAUTH_URL="http://localhost:3000"
$env:NEXTAUTH_SECRET="your-secret-key-here"

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Set up admin user
node scripts/setup-admin.js
```

**Option 3: Using .env file**

Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

Then run:
```bash
npx prisma generate
npx prisma db push
node scripts/setup-admin.js
```

### 4. Start Development Server

```bash
npm run dev
```

## Admin Access

Once setup is complete, you can access the admin panel at:

- **Admin Login**: http://localhost:3000/admin/login
- **Admin Dashboard**: http://localhost:3000/admin

### Default Admin Credentials

- **Email**: admin@Sukhwal.com
- **Password**: admin123

**Important**: Change these credentials after first login for security.

## Features

### Image Management
- Upload images with drag & drop
- Categorize images (Events, Gallery, News, Members, Other)
- Add descriptions and metadata
- View all uploaded images in gallery
- Delete images with confirmation
- Download images

### Dashboard
- Overview statistics
- Quick actions for common tasks
- Recent activity feed

### Security
- Admin-only access with authentication
- Role-based permissions
- Secure file uploads with validation
- Protected API routes

## File Structure

```
app/
├── admin/                 # Admin panel pages
│   ├── login/            # Admin login
│   ├── upload/           # Image upload
│   ├── gallery/          # Image management
│   └── layout.tsx        # Admin layout
├── api/
│   ├── auth/             # NextAuth API routes
│   └── admin/            # Admin API routes
│       ├── upload/       # Image upload API
│       └── images/       # Image management API
components/
├── admin/                # Admin-specific components
│   ├── AdminSidebar.tsx
│   ├── AdminHeader.tsx
│   └── ImageActions.tsx
lib/
├── auth.ts               # NextAuth configuration
└── prisma.ts             # Prisma client
prisma/
└── schema.prisma         # Database schema
public/
└── uploads/              # Uploaded images (created automatically)
```

## Customization

### Adding New Admin Features

1. Create new pages in `app/admin/`
2. Add API routes in `app/api/admin/`
3. Update the sidebar navigation in `components/admin/AdminSidebar.tsx`
4. Add new database models in `prisma/schema.prisma` if needed

### Styling

The admin panel uses:
- Tailwind CSS for styling
- shadcn/ui components
- Lucide React icons

### Database

The admin panel uses SQLite for simplicity. For production, consider:
- PostgreSQL or MySQL
- Cloud storage for images (AWS S3, Cloudinary, etc.)
- Environment-specific configurations

## Troubleshooting

### Common Issues

1. **Database connection errors**
   - Ensure `.env.local` is properly configured
   - Run `npx prisma generate` and `npx prisma db push`

2. **Upload errors**
   - Check that the `public/uploads` directory exists
   - Verify file permissions

3. **Authentication issues**
   - Ensure `NEXTAUTH_SECRET` is set
   - Check that admin user exists in database

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Review server logs
3. Verify all environment variables are set
4. Ensure all dependencies are installed 