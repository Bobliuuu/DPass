import { gmp_send } from './gmp';
import { jackal_download } from './jackal';
import { execSync } from 'child_process';

export function jackal_upload(file_name: string): void {
  // See jackal.ts
}

// Function to download a file
export function jackal_download(): void {
  
}

export function transfer(): void {
  gmp_send();
}

export function send_file(file_name: string): void {
  jackal_download();

  const recipient = 'example_user';
  const scriptName = '../scripts/ifps-func.sh';

  try {
    const response = execSync(`${scriptName} ${recipient} ${file_name}`).toString();
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}