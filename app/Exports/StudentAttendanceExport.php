<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use App\Models\Attendance;
use Maatwebsite\Excel\Concerns\withMapping;
use Maatwebsite\Excel\Concerns\shouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StudentAttendanceExport implements FromCollection, withMapping, shouldAutoSize, WithHeadings
{
    use Exportable;
    protected $studentId;
    protected $batchId;
    protected $date;
    public function __construct($studentId, $batchId, $date)
    {
        $this->studentId = $studentId;
        $this->batchId = $batchId;
        $this->date = $date;
    }

    public function collection()
    {
        return Attendance::where('student_id',$this->studentId)
                        ->orWhere('batch_id',$this->batchId)
                        ->orWhere('date',$this->date)
                        ->get();
    }

    public function map($attendance): array
    {
        return [
            $attendance->id,
            $attendance->student->name,
            $attendance->batch->batch_name,
            $attendance->status,
            $attendance->date,
        ];
    }
    public function headings(): array
    {
        return [
            'Sl No',
            'Student Name',
            'Batch Name',
            'Status',
            'Date',
        ];
    }
}
