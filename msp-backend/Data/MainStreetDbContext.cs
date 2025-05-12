using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using msp_backend.Models;

namespace msp_backend.Data;

public partial class MainStreetDbContext : DbContext
{
    public MainStreetDbContext(DbContextOptions<MainStreetDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<play> plays { get; set; }

    public virtual DbSet<showtime> showtimes { get; set; }

    public virtual DbSet<sponsor> sponsors { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasPostgresExtension("pg_catalog", "azure")
            .HasPostgresExtension("pg_catalog", "pgaadauth");

        modelBuilder.Entity<play>(entity =>
        {
            entity.HasKey(e => e.id).HasName("plays_pkey");

            entity.Property(e => e.director).HasMaxLength(255);
            entity.Property(e => e.title).HasMaxLength(255);

            entity.HasOne(d => d.sponsor).WithMany(p => p.plays)
                .HasForeignKey(d => d.sponsor_id)
                .HasConstraintName("plays_sponsor_id_fkey");
        });

        modelBuilder.Entity<showtime>(entity =>
        {
            entity.HasKey(e => e.id).HasName("showtimes_pkey");

            entity.HasOne(d => d.play).WithMany(p => p.showtimes)
                .HasForeignKey(d => d.play_id)
                .HasConstraintName("showtimes_play_id_fkey");
        });

        modelBuilder.Entity<sponsor>(entity =>
        {
            entity.HasKey(e => e.id).HasName("sponsors_pkey");

            entity.Property(e => e.sponsor_address).HasMaxLength(255);
            entity.Property(e => e.sponsor_name).HasMaxLength(255);
            entity.Property(e => e.sponsor_phonenumber).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
