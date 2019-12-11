﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServerApp.Models;

namespace ServerApp.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191211154720_ChangeDataType")]
    partial class ChangeDataType
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ServerApp.Models.Food", b =>
                {
                    b.Property<string>("FoodName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FoodDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Fruktosegehalt")
                        .HasColumnType("float");

                    b.Property<double>("Glukosegehalt")
                        .HasColumnType("float");

                    b.Property<double>("Saccharosegehalt")
                        .HasColumnType("float");

                    b.Property<double>("Sorbitgehalt")
                        .HasColumnType("float");

                    b.HasKey("FoodName");

                    b.ToTable("Foods");
                });
#pragma warning restore 612, 618
        }
    }
}
