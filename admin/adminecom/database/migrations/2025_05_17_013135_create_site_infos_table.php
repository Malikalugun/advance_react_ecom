<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('site_infos', function (Blueprint $table) {
            $table->id();
            $table->text('about', 5000);
            $table->text('refund', 5000);
            $table->text('parchase_guide', 5000);
            $table->text('privacy', 5000);
            $table->text('address', 5000);
            $table->text('android_app_link');
            $table->text('ios_applink');
            $table->string('facebook_link');
            $table->string('twitter_link');
            $table->string('instagram_link');
            $table->string('copyright_text');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_infos');
    }
};
