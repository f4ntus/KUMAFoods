import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Servlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String username = req.getParameter("username");
		String password = req.getParameter("password");

		if (username != null && password != null) {
			System.out.println("Username: " + username + " Password: " + password);
			resp.setStatus(resp.SC_OK);
		} else {
			System.out.println("No username & Password");
			resp.sendError(resp.SC_UNAUTHORIZED);
		}
	}

}
