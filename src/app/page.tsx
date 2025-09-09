"use server"

import { getDashboardStats } from "@/lib/api";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react"

export default async function SchoolManagementLanding() {
  const stats = await getDashboardStats();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EduManage</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/sign-in" className="text-sm text-muted-foreground hover:text-primary">Sign In</Link>
            <Link href="/(dashboard)/admin" className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            Trusted by 500+ Schools Worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Streamline Your School Management with <span className="text-primary">Confidence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Empower your educational institution with our comprehensive dashboard. Manage students, staff, and
            operations seamlessly while fostering a collaborative learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#get-started" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md text-sm">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary/5 bg-transparent px-8 py-3 rounded-md text-sm">
              Watch Demo
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-lg border border-border p-6 text-left">
              <p className="text-sm text-muted-foreground">Students</p>
              <p className="text-3xl font-bold">{stats.students}</p>
            </div>
            <div className="rounded-lg border border-border p-6 text-left">
              <p className="text-sm text-muted-foreground">Teachers</p>
              <p className="text-3xl font-bold">{stats.teachers}</p>
            </div>
            <div className="rounded-lg border border-border p-6 text-left">
              <p className="text-sm text-muted-foreground">Classes</p>
              <p className="text-3xl font-bold">{stats.classes}</p>
            </div>
            <div className="rounded-lg border border-border p-6 text-left">
              <p className="text-sm text-muted-foreground">Events</p>
              <p className="text-3xl font-bold">{stats.events}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Manage Your School
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our comprehensive platform brings together all essential tools for efficient school administration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <Users className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground">Student Management</h3>
                <p className="text-muted-foreground">Comprehensive student profiles, enrollment tracking, and academic progress monitoring.</p>
              </div>
            </div>

            <div className="border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <BarChart3 className="h-10 w-10 text-accent mb-2" />
                <h3 className="text-lg font-semibold text-foreground">Analytics & Reports</h3>
                <p className="text-muted-foreground">Detailed insights into academic performance, attendance, and institutional metrics.</p>
              </div>
            </div>

            <div className="border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground">Schedule Management</h3>
                <p className="text-muted-foreground">Efficient timetable creation, class scheduling, and event management tools.</p>
              </div>
            </div>

            <div className="border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <MessageSquare className="h-10 w-10 text-accent mb-2" />
                <h3 className="text-lg font-semibold text-foreground">Communication Hub</h3>
                <p className="text-muted-foreground">Seamless communication between teachers, students, and parents through integrated messaging.</p>
              </div>
            </div>

            <div className="border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <Shield className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground">Secure & Compliant</h3>
                <p className="text-muted-foreground">Enterprise-grade security with FERPA compliance and role-based access controls.</p>
              </div>
            </div>

            <div className="border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-6">
                <GraduationCap className="h-10 w-10 text-accent mb-2" />
                <h3 className="text-lg font-semibold text-foreground">Academic Excellence</h3>
                <p className="text-muted-foreground">Grade management, curriculum tracking, and assessment tools for academic success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Educational Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See how schools worldwide are transforming their operations with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg">
              <div className="pt-6 px-6 pb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "EduManage has revolutionized how we handle student data and communication. The interface is intuitive
                  and our staff adapted quickly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">Principal, Riverside Elementary</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg">
              <div className="pt-6 px-6 pb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "The analytics dashboard gives us incredible insights into student performance. We can identify and
                  address issues before they become problems."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">DJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dr. James Wilson</p>
                    <p className="text-sm text-muted-foreground">Superintendent, Metro School District</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg">
              <div className="pt-6 px-6 pb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Parent engagement has improved dramatically since implementing EduManage. The communication tools are
                  exactly what we needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">LR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lisa Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Vice Principal, Oakwood High School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join hundreds of schools already using EduManage to streamline operations and improve educational outcomes.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#get-started" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md text-sm">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#schedule" className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary/5 bg-transparent px-8 py-3 rounded-md text-sm">
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              30-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              Setup in minutes
            </div>
          </div>
          
/**
 *  <div className='flex items-center gap-2 flex-wrap'>
            <Link href="/list/teachers" className='px-3 py-2 rounded-md bg-white text-gray-900 text-sm hover:bg-gray-100'>View Teachers</Link>
            <Link href="/list/students" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>View Students</Link>
            <Link href="/(dashboard)/admin" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Admin</Link>
            <Link href="/(dashboard)/teacher" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Teacher</Link>
            <Link href="/(dashboard)/student" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Student</Link>
            <Link href="/(dashboard)/parent" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Parent</Link>
          </div>
*/
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">EduManage</span>
              </div>
              <p className="text-muted-foreground text-sm text-pretty">
                Empowering educational institutions with modern management solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 EduManage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}














