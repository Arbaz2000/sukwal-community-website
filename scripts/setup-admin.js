const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('Setting up admin user...')
  
  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@Sukhwal.com' }
  })

  if (existingAdmin) {
    console.log('Admin user already exists')
    return
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@Sukhwal.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin'
    }
  })

  console.log('Admin user created successfully!')
  console.log('Email: admin@Sukhwal.com')
  console.log('Password: admin123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 