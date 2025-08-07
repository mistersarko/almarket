<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadService
{
    public function upload(UploadedFile $file, $path = 'uploads')
    {
        return $file->store($path, 'public');
    }

    public function delete($path)
    {
        return Storage::disk('public')->delete($path);
    }
}