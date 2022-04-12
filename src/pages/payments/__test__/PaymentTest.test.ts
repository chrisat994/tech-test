
import request from "supertest";


const baseUrl = 'http://localhost:8080/api/v1/';

describe('Payments API endpoint', () => {
	it('should return a 200 status code and Page size must be 5', async () => {
		const response = await request(baseUrl,)
			.get('payments?status=&page=0').auth('user', 'userPass');

		expect(response.statusCode).toBe(200);
    expect(response.body.pageSize).toBe(5);
	});
});

