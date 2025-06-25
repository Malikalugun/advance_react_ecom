<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     */
    public function __construct($token)
    {
        $this->data = $token;
    }

    public function build()
    {
        $data = $this->data;
        return $this->from('annamalikalugun@gmail.com')
            ->subject('Password Reset Link')
            ->view('mail.forget', compact('data'));
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.forget',
            with: [
                'data' => $this->data
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
