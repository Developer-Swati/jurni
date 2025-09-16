# Overview

TripAI is an AI-powered travel planning application that helps users create personalized itineraries for their trips. The application features a modern React frontend with Express.js backend, allowing users to input their travel preferences and receive customized travel recommendations. The platform includes user authentication, trip management, and a comprehensive dashboard for managing travel plans.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/UI component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix routing
- **Middleware**: Express middleware for JSON parsing, CORS, and request logging
- **Development**: Vite integration for hot module replacement in development

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Client-side**: Local storage-based session management with mock authentication
- **User Management**: Basic user profile management with preferences storage
- **Session Handling**: Browser localStorage for user session persistence

## Component Architecture
- **Design System**: Consistent component library with variant-based styling using class-variance-authority
- **Layout Structure**: Responsive design with mobile-first approach
- **Page Organization**: Route-based code splitting with dedicated page components
- **Form Components**: Multi-step form wizard for trip planning workflow

## Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for server compilation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Development Server**: Integrated development environment with Vite middleware
- **Code Organization**: Monorepo structure with shared schema and types

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and schema management
- **PostgreSQL**: Primary database for user data and trip information

## UI and Design Libraries
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel component for image galleries

## Development Tools
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema validation
- **Wouter**: Lightweight routing library for React

## Build and Development
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety across the entire application
- **esbuild**: Fast JavaScript bundler for server builds
- **Replit Plugins**: Development environment integration for Replit platform